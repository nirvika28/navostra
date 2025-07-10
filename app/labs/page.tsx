import Image from 'next/image';
import { FaThumbtack, FaLock, FaCheckCircle, FaBook, FaUsers } from 'react-icons/fa';

export default function ExploreLabsPage() {
  return (
    <div className="bg-white text-[#1a1a1a] p-8 space-y-12 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Where Innovation Meets Education</h1>

      {/* STEM & ATL Labs */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold text-blue-800">STEM & Robotics Labs</h2>
          <p className="mt-2">
            We design and establish fully-equipped STEM and Robotics Labs that promote hands-on learning,
            innovation, and 21st-century skills. Our labs are age-appropriate, <strong>NEP 2020-aligned</strong>, and
            delivered with structured curriculum, student kits, and teacher training.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><FaThumbtack className="inline mr-1 text-pink-600" /> <strong>Ideal For:</strong> Schools (Grades 6–12), Innovation Hubs, Talent Development</li>
            <li><FaLock className="inline mr-1 text-red-500" /> <strong>Includes:</strong> Equipment, Curriculum, Projects, Assessment Tools</li>
          </ul>
        </div>
        <Image src="/images/robotics-lab.jpg" alt="Robotics Lab" width={500} height={300} className="rounded-lg" />

        <Image src="/images/atl-lab.jpg" alt="ATL Lab" width={500} height={300} className="rounded-lg md:order-2" />
        <div className="md:order-1">
          <h2 className="text-2xl font-bold text-blue-800">Atal Tinkering Labs (ATL) Setup</h2>
          <p className="mt-2">
            We assist schools in setting up ATL Labs <strong>under the NITI Aayog framework</strong> — from infrastructure planning and procurement to grant support, training, and mentoring.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><FaCheckCircle className="inline mr-1 text-blue-500" /> <strong>Services:</strong> ATL Proposal Support, Equipment, Training, Docs</li>
            <li><FaThumbtack className="inline mr-1 text-purple-500" /> <strong>Add-on:</strong> ATL Innovation Challenges & Bootcamps</li>
          </ul>
        </div>
      </div>

      {/* Science Centres & 21st Century */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold text-blue-800">Science Centres & Futuristic Labs</h2>
          <p className="mt-2">
            Custom-designed Science Centres that immerse students in <strong>physical sciences, emerging tech</strong>,
            and real-world problem-solving using interactive models.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><FaThumbtack className="inline mr-1 text-pink-600" /> <strong>Features:</strong> Thematic Zones, Exhibits, IoT/AI Showcases</li>
            <li><FaUsers className="inline mr-1 text-blue-600" /> <strong>Best For:</strong> District Science Parks, Schools, NGOs</li>
          </ul>
        </div>
        <Image src="/images/science-centre.jpg" alt="Science Centre" width={500} height={300} className="rounded-lg" />

        <Image src="/images/21st-skills.jpg" alt="21st Century Skills" width={500} height={300} className="rounded-lg md:order-2" />
        <div className="md:order-1">
          <h2 className="text-2xl font-bold text-blue-800">21st-Century Skills & Awareness</h2>
          <p className="mt-2">
            Workshops to develop <strong>coding, AI, design thinking, and entrepreneurship</strong> among students and educators.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><FaCheckCircle className="inline mr-1 text-green-600" /> <strong>Delivery:</strong> On-site or Online</li>
            <li><FaUsers className="inline mr-1 text-pink-600" /> <strong>Target Group:</strong> Grades 6–12, Teachers, NGOs, CSR Programs</li>
          </ul>
        </div>
      </div>

      {/* Training + Curriculum */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold text-blue-800">Training & Handholding</h2>
          <p className="mt-2">
            We provide extensive <strong>teacher & student training</strong>, lab in-charge orientation, and ongoing support.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><FaThumbtack className="inline mr-1 text-rose-600" /> <strong>Includes:</strong> Workshops, Assessment Tools, Aids</li>
            <li><FaBook className="inline mr-1 text-indigo-600" /> <strong>Modes:</strong> Onsite + Digital</li>
          </ul>
        </div>
        <Image src="/images/training.jpg" alt="Training" width={500} height={300} className="rounded-lg" />

        <Image src="/images/curriculum.jpg" alt="Curriculum" width={500} height={300} className="rounded-lg md:order-2" />
        <div className="md:order-1">
          <h2 className="text-2xl font-bold text-blue-800">Curriculum & Content Development</h2>
          <p className="mt-2">
            Our team builds <strong>NEP-aligned curricula</strong>, DIY guides, and multimedia learning content.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><FaCheckCircle className="inline mr-1 text-emerald-500" /> <strong>Subjects:</strong> Robotics, AI, STEM, Coding, Tinkering</li>
            <li><FaBook className="inline mr-1 text-orange-500" /> <strong>Formats:</strong> Print, Digital, Simulation, Video</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
