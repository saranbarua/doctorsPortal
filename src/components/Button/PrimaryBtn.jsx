/* eslint-disable react/prop-types */
export default function PrimaryBtn({ children }) {
  return (
    <div>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
        {children}
      </button>
    </div>
  );
}
