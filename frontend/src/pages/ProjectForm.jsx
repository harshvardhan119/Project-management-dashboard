import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../services/api';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      API.get(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
        })
        .catch((err) => {
          console.error('Error loading project:', err);
          alert('Failed to load project.');
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, description };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    try {
      if (id) {
        await API.put(`/projects/${id}`, payload, config);
      } else {
        await API.post('/projects', payload, config);
      }
      navigate('/dashboard');
    } catch (err) {
      console.error('Error saving project:', err);
      alert('Failed to save project.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {id ? 'Edit Project' : 'Create New Project'}
      </h2>

      <label className="block mb-2 font-medium">Title</label>
      <input
        type="text"
        placeholder="Enter project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
        required
      />

      <label className="block mb-2 font-medium">Description</label>
      <textarea
        placeholder="Enter project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 mb-6 border rounded h-32 resize-none focus:outline-none focus:ring focus:border-blue-300"
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
      >
        {id ? 'Update Project' : 'Create Project'}
      </button>
    </form>
  );
};

export default ProjectForm;
