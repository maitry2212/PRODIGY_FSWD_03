import React from "react";

export default function CommonForm({ formControls, formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {formControls?.map((control) => (
        <div key={control.id}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {control.label}
          </label>
          {control.componentType === "input" && (
            <input
              type={control.type}
              name={control.id}
              placeholder={control.placeholder}
              value={formData[control.id] || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          {control.componentType === "textarea" && (
            <textarea
              name={control.id}
              placeholder={control.placeholder}
              value={formData[control.id] || ""}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          {control.componentType === "select" && (
            <select
              name={control.id}
              value={formData[control.id] || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{control.placeholder}</option>
              {control.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
