
export async function getGroups(graphqlRequest){
  const resp = await graphqlRequest(
  	`{
      groups{
        id,
        name,
        users{
          id,
          name,
          picture
        }
    	}
    }`);
  const groups = await resp.data;
  return groups;
};
