import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Image
            src="/public/logo.jpg"
            alt="Agriyield Bioenergy Logo"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Powering Industry Sustainably
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming agricultural waste into clean energy solutions through
            innovative biomass briquetting technology
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Why Biomass?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• 100% Renewable Energy Source</li>
              <li>• 40% Cheaper than Coal</li>
              <li>• Carbon Neutral Combustion</li>
              <li>• Zero Sulfur Emissions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Our Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-600">
              <li>Agricultural Waste Collection</li>
              <li>Material Processing & Drying</li>
              <li>High-Pressure Briquetting</li>
              <li>Quality Controlled Distribution</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Benefits
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• 24/7 Industrial Heating</li>
              <li>• Consistent BTU Output</li>
              <li>• Easy Storage & Handling</li>
              <li>• Ash Utilization Program</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Dr. Rohan Sharma
              </h3>
              <p className="text-gray-600 mb-4">Co-Founder & CTO</p>
              <p className="text-gray-600">
                15+ years experience in renewable energy systems and biomass
                conversion technologies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Anika Patel
              </h3>
              <p className="text-gray-600 mb-4">Co-Founder & COO</p>
              <p className="text-gray-600">
                Sustainable operations expert with decade-long experience in
                agricultural supply chain management
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Head Office</h3>
              <p className="text-sm">
                Green Energy Park, Sector 62
                <br />
                Noida, Uttar Pradesh 201309
                <br />
                India
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">
                Email: contact@agriyieldbio.com
                <br />
                Phone: +91 98765 43210
                <br />
                Office Hours: Mon-Sat 9AM-6PM
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Certifications</h3>
              <p className="text-sm">
                • ISO 14001 Certified
                <br />
                • FSSAI Approved
                <br />• MSME Registered
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-green-800 text-center text-sm">
            <p>
              © 2024 Agriyield Bioenergy Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
