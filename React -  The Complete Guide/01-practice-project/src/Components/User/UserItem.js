function UserItem(props) {
  return props.dataList.map((item) => {
    return (
      <div>
        {item.name} ({item.age} years old)
      </div>
    );
  });
}
export default UserItem;
