const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
    <div className="max-w-4xl mx-auto p-4">
      <img
        src="https://cdn.w600.comps.canstockphoto.com/health-care-word-cloud-pictures_csp34482189.jpg"
        alt="No Image"
        className="h-40 w-80 mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold font-mono mb-4 text-center font-sans text-stone-900">Welcome to our Medical Website!</h1>
      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sapien in lacus aliquet volutpat sed ac ante.
        Phasellus sit amet nisi mauris. Donec fringilla augue non est feugiat sollicitudin. Nam iaculis mauris sed tincidunt
        rhoncus.
      </p>
      <p className="text-lg font-mono font-bold text-slate-900">
        In our website, you can find useful information about various medical conditions, treatments, and healthcare tips.
        We aim to provide reliable and up-to-date information to help you make informed decisions about your health.
        Browse through our articles, resources, and frequently asked questions for more details.
      </p>
    </div>
  </div>
  );
};

export default Home;
