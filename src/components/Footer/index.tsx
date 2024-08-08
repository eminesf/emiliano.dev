export const Footer = () => {
  const year = new Date();
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {year.getFullYear()} Emiliano. Todos direitos reservados.</p>
    </footer>
  );
};
