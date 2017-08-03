
export async function getUsers(graphqlRequest){
  const resp = await graphqlRequest(
  	`{
      users{
        id,
        name,
        picture,
        groups{
          id,
          name,
        }
      }
    }`);
  const users = await resp.data;
  return users;
};
