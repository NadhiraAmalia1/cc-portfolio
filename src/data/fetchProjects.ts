import { Project } from "@/types/project";
export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(
    "https://api.backendless.com/58862122-0C6F-4423-BFFB-3FA09803FC82/DA41E2F4-8BB3-4BBA-BA55-4BCCBC81E91B/data/portfolio",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  const rawData = await res.text(); // 👈 ini ubah dulu jadi text biar bisa debug
  console.log("RAW RESPONSE:", rawData); // 👈 cek data mentah Backendless

  if (!res.ok) {
    throw new Error("Failed to fetch projects from Backendless");
  }

  // Coba parse kalau bisa
  let jsonData;
  try {
    jsonData = JSON.parse(rawData);
  } catch (e) {
    console.error("JSON parse error:", e);
    throw new Error("Backendless response bukan JSON");
  }

  // Log hasil setelah parse
  console.log("Parsed JSON:", jsonData);

  const data: Project[] = (jsonData as unknown[]).map((item) => {
    const obj = item as Partial<Project> & { technologies?: string };
    return {
      title: obj.title || "",
      imageUrl: obj.imageUrl || "",
      description: obj.description || "",
      situation: obj.situation || "",
      task: obj.task || "",
      action: obj.action || "",
      result: obj.result || "",
      projectUrl: obj.projectUrl || "",
      technologies:
        typeof obj.technologies === "string"
          ? JSON.parse(obj.technologies)
          : obj.technologies || [],
    };
  });

  console.log("DATA:", data);
  return data;
}