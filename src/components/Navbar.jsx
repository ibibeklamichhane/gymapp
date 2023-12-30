

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto text-2xl">
        <div className="flex items-center justify-between">
          <div className="text-white">GYM APP</div>
          <div className="flex-grow flex justify-center items-center space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Workouts</a>
            <a href="#" className="text-white">Nutritions</a>
            <a href="#" className="text-white">Challenges</a>
          </div>
          <div className="flex items-center space-x-4">
          <a href="#" className="text-white">Profile</a>
          <i className="fas fa-user text-white text-2xl"></i> {/* Font Awesome user icon */}
        </div>
        </div>
      </div>
    </nav>
  );
  
  
}

export default Navbar