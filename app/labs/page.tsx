import Image from 'next/image';

export default function ExploreLabsPage() {
  return (
    <div className="bg-white text-[#1a1a1a] px-6 py-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-14">
        Where Innovation Meets Education
      </h1>

      {/* Section Block */}
      {[
        {
          title: "STEM & Robotics Labs",
          desc: "We design and establish fully-equipped STEM and Robotics Labs that promote hands-on learning, innovation, and 21st-century skills. Our labs are age-appropriate, NEP 2020-aligned, and delivered with structured curriculum, student kits, and teacher training.",
          points: [
            "📌 Ideal For: Schools (Grades 6–12), Innovation Hubs, Talent Development",
            "🔐 Includes: Equipment, Curriculum, Projects, Assessment Tools",
          ],
          image: "/images/stemlab.png",
        },
        {
          title: "Atal Tinkering Labs (ATL) Setup",
          desc: "We assist schools in setting up ATL Labs under the NITI Aayog framework — from infrastructure planning and procurement to grant support, training, and mentoring.",
          points: [
            "✅ Services: ATL Proposal Support, Equipment, Training, Docs",
            "📌 Add-on: ATL Innovation Challenges & Bootcamps",
          ],
          image: "/images/atallab.png",
        },
        {
          title: "Science Centres & Futuristic Labs",
          desc: "Custom-designed Science Centres that immerse students in physical sciences, emerging tech, and real-world problem-solving using interactive models.",
          points: [
            "📌 Features: Thematic Zones, Exhibits, IoT/AI Showcases",
            "👥 Best For: District Science Parks, Schools, NGOs",
          ],
          image: "/images/sciencelab.png",
        },
        {
          title: "21st-Century Skills & Awareness",
          desc: "Workshops to develop coding, AI, design thinking, and entrepreneurship among students and educators.",
          points: [
            "✅ Delivery: On-site or Online",
            "👥 Target Group: Grades 6–12, Teachers, NGOs, CSR Programs",
          ],
          image: "/images/21cent.png",
        },
        {
          title: "Training & Handholding",
          desc: "We provide extensive teacher & student training, lab in-charge orientation, and ongoing support.",
          points: [
            "📌 Includes: Workshops, Assessment Tools, Aids",
            "📚 Modes: Onsite + Digital",
          ],
          image: "/images/training.png",
        },
        {
          title: "Curriculum & Content Development",
          desc: "Our team builds NEP-aligned curricula, DIY guides, and multimedia learning content.",
          points: [
            "✅ Subjects: Robotics, AI, STEM, Coding, Tinkering",
            "📘 Formats: Print, Digital, Simulation, Video",
          ],
          image: "/images/curriculum.png",
        },
      ].map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10 mb-16`}
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">{section.title}</h2>
            <p className="mb-4">{section.desc}</p>
            <ul className="space-y-1 text-sm">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
