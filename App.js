
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Thiruselvan E</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#certifications" className="hover:underline">Certifications</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          Enthusiastic and detail-oriented Java Full Stack Developer with a strong foundation in programming fundamentals,
          including data structures, algorithms, and object-oriented programming (OOP). Experienced in frontend technologies,
          backend APIs, and databases. Passionate about creating efficient and scalable web solutions.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li><strong>Email:</strong> thiruselvan8031@gmail.com</li>
          <li><strong>Phone:</strong> +91 93633 91667</li>
          <li><strong>Location:</strong> Periyar Quarters, Villupuram</li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/thiruselvan" className="text-blue-600 underline">linkedin.com/in/thiruselvan</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Thiruselvan123" className="text-blue-600 underline">github.com/Thiruselvan123</a></li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div><strong>Programming:</strong> Java, Python, C</div>
          <div><strong>Frontend:</strong> HTML, CSS</div>
          <div><strong>Database:</strong> SQL</div>
          <div><strong>Soft Skills:</strong> Problem Solving, Communication, Teamwork</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Human Following Robot using Arduino</h3>
            <p>Custom algorithms for obstacle avoidance and real-time path adjustments ensuring safe and efficient navigation.</p>
          </li>
          <li>
            <h3 className="font-semibold">Autonomous Fire Fighting Robot</h3>
            <p>Programmed automated movement and fire-extinguishing mechanisms with obstacle avoidance capabilities.</p>
          </li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc pl-5">
          <li>Programming Essentials in Python - Cisco Networking Academy</li>
          <li>Cybersecurity Essentials - Cisco Networking Academy</li>
          <li>Front End Development (HTML) - Great Learning</li>
          <li>Introduction to Python - Great Learning</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>You can reach out to me via email or LinkedIn for job opportunities or collaborations.</p>
        <p className="mt-2"><strong>Email:</strong> thiruselvan8031@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/thiruselvan" className="text-blue-600 underline">linkedin.com/in/thiruselvan</a></p>
      </section>
    </div>
  );
}
