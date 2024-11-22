// Form.tsx
"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface ProjectWithoutId {
  project_name: string;
  project_github_url: string;
  project_readme: string;
}

const Form = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState<ProjectWithoutId>({
    project_name: "",
    project_github_url: "",
    project_readme: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({
        project_name: "",
        project_github_url: "",
        project_readme: "",
      });
    } 

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <div className="mb-4">
        <label
          htmlFor="project_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Project Name
        </label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          value={formData.project_name}
          onChange={handleChange}
          placeholder="Enter project name"
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="project_github_url"
          className="block text-gray-700 font-bold mb-2"
        >
          GitHub URL
        </label>
        <input
          type="text"
          id="project_github_url"
          name="project_github_url"
          value={formData.project_github_url}
          onChange={handleChange}
          placeholder="Enter GitHub URL"
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="project_readme"
          className="block text-gray-700 font-bold mb-2"
        >
          README Content
        </label>
        <textarea
          id="project_readme"
          name="project_readme"
          value={formData.project_readme}
          onChange={handleChange}
          placeholder="Enter README content"
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
          rows={5}
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
