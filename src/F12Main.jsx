const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/HomepageFollowing'>/HomepageFollowing</a></td>
            <td style={tableCellStyle}><a href='/HomepageFollowing'>Homepage-Following</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HomepageForYou'>/HomepageForYou</a></td>
            <td style={tableCellStyle}><a href='/HomepageForYou'>Homepage-For You</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Login'>/Login</a></td>
            <td style={tableCellStyle}><a href='/Login'>Login</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LoginOrSignup'>/LoginOrSignup</a></td>
            <td style={tableCellStyle}><a href='/LoginOrSignup'>login_or_signup</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Property1Default'>/Property1Default</a></td>
            <td style={tableCellStyle}><a href='/Property1Default'>Property 1=Default</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Property1Variant2'>/Property1Variant2</a></td>
            <td style={tableCellStyle}><a href='/Property1Variant2'>Property 1=Variant2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Property1Variant3'>/Property1Variant3</a></td>
            <td style={tableCellStyle}><a href='/Property1Variant3'>Property 1=Variant3</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Saved'>/Saved</a></td>
            <td style={tableCellStyle}><a href='/Saved'>Saved</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Signup1'>/Signup1</a></td>
            <td style={tableCellStyle}><a href='/Signup1'>Signup-1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Signup2'>/Signup2</a></td>
            <td style={tableCellStyle}><a href='/Signup2'>Signup-2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/UserPref'>/UserPref</a></td>
            <td style={tableCellStyle}><a href='/UserPref'>User_pref</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Welcome'>/Welcome</a></td>
            <td style={tableCellStyle}><a href='/Welcome'>Welcome</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/YourThreads'>/YourThreads</a></td>
            <td style={tableCellStyle}><a href='/YourThreads'>Your threads</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}