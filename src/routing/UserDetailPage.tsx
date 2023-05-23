import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetailPage = () => {
  const params = useParams();
  // console.log(params); // {id: '1'}
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.toString()); // name=Alice&age=25
  // console.log(searchParams.get('name')); // Alice
  const location = useLocation();
  // console.log(location);
  //   {
  //     "pathname": "/users/2",
  //     "search": "?name=Alice&age=25",
  //     "hash": "",
  //     "state": null,
  //     "key": "default"
  // }

  return <p>User</p>;
};

export default UserDetailPage;
