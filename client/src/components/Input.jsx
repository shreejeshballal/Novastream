const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      className="bg-background ring-dark-gray rounded-lg ring-2 px-4 py-2 w-full transition-all duration-300 hover:bg-light-gray"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
