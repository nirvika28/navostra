import Image from 'next/image';

export default function ITSolutionsPage() {
  return (
    <div className="bg-white py-12 px-6 md:px-20 text-center text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-blue-700 mb-12">Tech-Driven Environment</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LMS */}
        <div className="flex bg-indigo-900 text-white rounded-xl overflow-hidden shadow-md">
          <div className="w-1/3 p-4">
            <Image src="/images/lms.png" alt="LMS" width={100} height={100} className="mx-auto" />
          </div>
          <div className="w-2/3 p-4 text-left">
            <h2 className="font-bold text-lg mb-2">Learning Management Systems</h2>
            <p>Streamlined platforms for content delivery, student tracking, and online learning.</p>
          </div>
        </div>

        {/* Billing Software */}
        <div className="flex bg-indigo-900 text-white rounded-xl overflow-hidden shadow-md">
          <div className="w-1/3 p-4">
            <Image src="/images/billing.png" alt="Billing Software" width={100} height={100} className="mx-auto" />
          </div>
          <div className="w-2/3 p-4 text-left">
            <h2 className="font-bold text-lg mb-2">Billing Software</h2>
            <p>Efficient solutions for handling payments, invoicing, and financial reporting.</p>
          </div>
        </div>

        {/* AI-Integrated EdTech */}
        <div className="flex bg-indigo-900 text-white rounded-xl overflow-hidden shadow-md">
          <div className="w-1/3 p-4">
            <Image src="/images/ai-edtech.png" alt="AI EdTech" width={100} height={100} className="mx-auto" />
          </div>
          <div className="w-2/3 p-4 text-left">
            <h2 className="font-bold text-lg mb-2">AI-Integrated EdTech Platforms</h2>
            <p>Personalized learning experiences powered by artificial intelligence.</p>
          </div>
        </div>

        {/* Custom Web Development */}
        <div className="flex bg-indigo-900 text-white rounded-xl overflow-hidden shadow-md">
          <div className="w-1/3 p-4">
            <Image src="/images/web-dev.png" alt="Web Dev" width={100} height={100} className="mx-auto" />
          </div>
          <div className="w-2/3 p-4 text-left">
            <h2 className="font-bold text-lg mb-2">Custom Web Development</h2>
            <p>Tailored websites to support your brand, academics, and community engagement.</p>
          </div>
        </div>

        {/* ERP & CRM */}
        <div className="flex bg-indigo-900 text-white rounded-xl overflow-hidden shadow-md">
          <div className="w-1/3 p-4">
            <Image src="/images/erp-crm.png" alt="ERP CRM" width={100} height={100} className="mx-auto" />
          </div>
          <div className="w-2/3 p-4 text-left">
            <h2 className="font-bold text-lg mb-2">ERP & CRM Systems</h2>
            <p>Manage institutional operations, data, admissions, and finances efficiently.</p>
          </div>
        </div>

        {/* Custom App Development */}
        <div className="flex bg-indigo-900 text-white rounded-xl overflow-hidden shadow-md">
          <div className="w-1/3 p-4">
            <Image src="/images/app-dev.png" alt="App Dev" width={100} height={100} className="mx-auto" />
          </div>
          <div className="w-2/3 p-4 text-left">
            <h2 className="font-bold text-lg mb-2">Custom App Development</h2>
            <p>Mobile apps to support your brand, academics, and community engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
