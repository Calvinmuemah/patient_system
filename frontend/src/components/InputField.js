export default function InputField({ label, type = "text", name, value, onChange, required = false }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}