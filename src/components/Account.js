import { useEffect, useState } from 'react';

const Account = props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  });

  return (
    <div className={props.className}>
      <h3>Welcome username: {!data ? 'Loading..' : data}</h3>
    </div>
  );
};
export default Account;
