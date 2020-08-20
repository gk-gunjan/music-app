export const initialState ={
    user:null,
    playLists:[],
    playing:false,
    item: null,
    // Remove after completion as it will keep you always authenticate
    // token:
    // 'BQBOKnBjgEM_s_wZv6VdRuIj3Tb-8VK0MRuTD1G9ywXk3hV4UJhGln69sJa99zNTFunLwaactatZvzCGlnxRethDI6wYFmijytF8auFKPuaUmpOYDeXArijL-hKZl1fo34ZKGghWWTmTrkrQRT4TjFbme2pa4TZz3W8eldYtWMa3-0ps',
};

const reducer =(state,action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }; 
        
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }

            default:
                return state;
    }
};

export default reducer;