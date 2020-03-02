

export default {
   
    toast({ commit, state, dispatch }, payload) {

        // If user is already logged in notify and exit
        // if (state.isUserLoggedIn()) {
        //     // Close animation if passed as payload
        //     if(payload.closeAnimation) payload.closeAnimation()

        //     payload.notify({
        //         title: 'Login Attempt',
        //         text: 'You are already logged in!',
        //         iconPack: 'feather',
        //         icon: 'icon-alert-circle',
        //         color: 'warning'
        //     });

        //     return false
        // }
 
        // console.log({payload})
        alert("Hey Slugger!")

    } 
}
