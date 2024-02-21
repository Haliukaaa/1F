const Contact = () => {
  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h1>
      <p className="mt-6 text-color3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="mt-6 flex gap-8">
        <div className="border rounded-xl w-1/2 pt-4 pl-4 pb-4">
          <h1 className="font-bold text-lg">Address</h1>
          <p className="mt-3 text-color3">1328 Oak Ridge Drive, Saint</p>
          <p className="text-color3">Louis, Missouri</p>
        </div>
        <div className="border rounded-xl w-1/2 pt-4 pl-4 pb-4">
          <h1 className="font-bold text-lg">Contact</h1>
          <div className="mt-3">
            <p className="text-color3">313-332-8662</p>
            <p className="text-color3">info@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
