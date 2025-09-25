export default function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Experience Premium Public Transport?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of satisfied passengers who choose Amana
              Transportation for their daily commute and travel needs.
              Experience the future of public transportation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#map"
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Track Live Buses
              </a>
              <a
                href="#schedule"
                className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                View Schedules
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
