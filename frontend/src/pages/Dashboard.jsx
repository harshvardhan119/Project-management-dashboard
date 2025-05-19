import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await API.get('/projects', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Your Projects</h2>
        <button
          onClick={() => navigate('/create')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-sm transition"
        >
          + Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-600 text-center">No projects found. Start by creating one!</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project._id}
              className="bg-white p-4 rounded shadow flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{project.description}</p>
              </div>
              <div className="flex flex-col space-y-2 items-end">
                <Link
                  to={`/edit/${project._id}`}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProject(project._id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
