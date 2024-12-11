"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface ProjectWithoutId {
  project_name: string;
  project_github_url: string;
  project_picture: File | null;
}

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<ProjectWithoutId>({
    project_name: "",
    project_github_url: "",
    project_picture: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      project_picture: file,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("project_name", formData.project_name);
    formDataToSend.append("project_github_url", formData.project_github_url);
    if (formData.project_picture) {
      formDataToSend.append("project_picture", formData.project_picture);
    }
  
    const response = await fetch("/api/projects", {
      method: "POST",
      body: formDataToSend,
    });
  
    if (response.ok) {
      setFormData({
        project_name: "",
        project_github_url: "",
        project_picture: null,
      });
      router.refresh();
    } else {
      console.error("Error submitting the form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md w-full p-6 mb-8 text-sm font-bold text-gray-800"
    >
      {/* Form Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Add a New Project
      </h2>

      {/* Project Name */}
      <div className="mb-4">
        <label
          htmlFor="project_name"
          className="block text-sm font-medium text-gray-800 mb-1"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 text-left"
        />
      </div>

      {/* GitHub URL */}
      <div className="mb-4">
        <label
          htmlFor="project_github_url"
          className="block text-sm font-medium text-gray-800 mb-1"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 text-left"
        />
      </div>

      {/* Project Picture */}
      <div className="mb-4">
        <label
          htmlFor="project_picture"
          className="block text-sm font-medium text-gray-800 mb-1"
        >
          Project Picture
        </label>
        <input
          type="file"
          id="project_picture"
          name="project_picture"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Project
        </button>
      </div>

    </form>
  );
};

export default Form;
