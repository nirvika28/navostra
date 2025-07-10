import React from 'react';

const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Section: Who We Are */}
      <section className="bg-blue-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Who We Are!</h2>
            <p className="mb-4">Navostra Edunitive Technologies is a forward-thinking education and technology company on a mission to deliver star-class innovations in education and technology. We aim to bridge the gap between traditional learning methods and the evolving needs of a future-ready world.</p>
            <p className="mb-4">Our holistic integration of <strong>experiential education, intelligent technology, and creative design</strong> sets us apart, tailored to spark curiosity, encourage problem-solving, and develop essential 21st-century skills.</p>
            <p className="mb-4">We specialize in setting up <strong>STEM and Robotics Labs, Atal Tinkering Labs, Science Centres, and skill development programs</strong>, supported by <strong>custom training, content creation, and educational kits</strong>.</p>
            <p className="mb-4">We also offer IT solutions like <strong>LMS, AI tools, ERP/CRM</strong> and more, empowering institutions with digital efficiency.</p>
            <p className="mb-4">Our <strong>creative design team</strong> enhances these with impactful <strong>branding, educational graphics, and visual content</strong>.</p>
            <p className="font-semibold text-blue-800">At Navostra, we don’t just offer services—we co-create the future of learning.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
          <img src="/images/about.jpg" alt="Coding" className="w-full max-w-md rounded-xl shadow-lg" />


          </div>
        </div>
      </section>

      {/* Section: Vision, Mission */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">The Heart of Navostra</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg">
            <img src="/images/ourvision.jpg" alt="Vision" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p>To be a pioneering force in transforming education by integrating innovation, technology, and creativity – shaping a generation equipped with skills, curiosity, and a mindset to lead in the world of tomorrow.</p>
          </div>
          <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg">
            <img src="/images/mission.jpg" alt="Mission" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p>To empower educational institutions with next-generation tools and experiential learning environments by delivering cutting-edge STEM solutions, intelligent digital platforms, and impactful creative services – enabling students and educators to thrive in the age of innovation.</p>
          </div>
          <div className="bg-yellow-400 p-6 rounded-2xl shadow-lg">
            <img src="/images/tech-icons.jpg" alt="Tech Icons" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section: Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/coreval.png" alt="Brain and Tech" className="w-full h-auto" />
          </div>
          <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <ul className="space-y-4">
              <li>
                <span className="text-cyan-400 font-semibold">INNOVATION WITH PURPOSE</span><br />
                We create solutions that are not just advanced, but meaningful—built to spark curiosity, enhance learning, and prepare students for a tech-driven world.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">INTEGRITY IN ACTION</span><br />
                We operate with honesty, transparency, and accountability, building trust through consistent quality and ethical practices.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">CREATIVITY AS A CATALYST</span><br />
                We blend imagination with functionality—transforming learning materials, technologies, and labs into engaging and inspiring experiences.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">COLLABORATION OVER COMPETITION</span><br />
                We believe in growing together. By partnering with educators, institutions, and change-makers, we co-create impactful educational ecosystems.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">FUTURE-FIRST THINKING</span><br />
                We anticipate tomorrow’s needs—designing tools, content, and skills training that prepare learners for the world ahead.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
