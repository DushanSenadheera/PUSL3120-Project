function Admin_Movie_Table({ data }) {
  return (
    <table className="admin-movie-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Movie</th>
          <th>Date</th>
          <th>Time</th>
          <th>Seats</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.user}</td>
            <td>{row.movie}</td>
            <td>{row.date}</td>
            <td>{row.time}</td>
            <td>{row.seats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Admin_Movie_Table;
