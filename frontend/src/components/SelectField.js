export default function SelectField({ label, name, options, value, onChange, required = false }) {
  return (
    <div>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}