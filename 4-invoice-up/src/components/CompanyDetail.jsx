export const CompanyDetail = ({title, company }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">compañia: {company.name}</li>
        <li className="list-group-item">
          numero fiscal: {company.fiscalNumber}
        </li>
      </ul>
    </>
  );
};
