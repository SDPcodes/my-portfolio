export default function EducationSection() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
      {/* Higher Education */}
      <div style={{
        flex: '1 1 300px',
        background: '#fff8e1',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#003366' }}>🎓 Higher Education</h2>
        <div style={{ color: '#000000' }}>
            <p><strong>Degree:</strong> B.Sc. (Hons). Electronic and Telecommunication Engineering</p>
            <p><strong>University:</strong> University of Moratuwa </p>
            <p><strong>Year:</strong> 2015 - 2020</p>
            <p><strong>Highlights: </strong> 
                <ul> GPA: 3.55/4.2 - Second Class Upper Division. </ul>
                <ul> Dean's List GPA in Semester 1 (Rank 36 - Out of 700+) and 7. </ul>
            </p>
        </div>
      </div>

      {/* Schooling */}
      <div style={{
        flex: '1 1 300px',
        background: '#fff8e1',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#664400' }}>🏫 Schooling</h2>
        <div style={{ color: '#000000' }}>
            <p><strong>School:</strong> Sivali Central College </p>
            <p><strong>Year:</strong> 2014-Advanced Level / 2011-Ordinary Level</p>
            <p><strong>Highlights:</strong> 
                <ul> Advanced Level - 3A in first attempt - Maths Stream - ZScore 2.3348 - Island Rank 239 - District Rank 5 </ul> 
                <ul> Ordinary Level - 9A in first attempt </ul>
            </p>
        </div>
      </div>
    </div>
  );
}
