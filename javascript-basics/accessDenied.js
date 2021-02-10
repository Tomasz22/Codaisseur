const password = 'supersecretpassword'
const input = 'iamhackingyou'
const loginAttemptsFailed = 2
const maxLoginAttempts = 3

const passwordCorrect = password === input
const finalLoginAttempt = loginAttemptsFailed + 1 >= maxLoginAttempts

const accountLocked = !passwordCorrect && finalLoginAttempt
// just locking someone out of their account isn't very nice ...
// We want to display some feedback:

// If the password is correct -> 'Welcome'
// If the account was locked -> 'You are trying to hack us! ACCESS DENIED!'
// If the password was wrong but you can try again -> 
// 'Wrong! You can try again x more time(s)'



const mySolution = () => {
    if(passwordCorrect){
        return 'Welcome'
    }else if(finalLoginAttempt && !passwordCorrect){
        return `Wrong! You can try again ${maxLoginAttempts - loginAttemptsFailed} more time(s)`
    }else if(!passwordCorrect && maxLoginAttempts<=maxLoginAttempts){
        return 'You are trying to hack us! ACCESS DENIED!'
    }
}


console.log(mySolution());
const display = (passwordCorrect
    ?'Welcome'
    :finalLoginAttempt && !passwordCorrect
    ?`Wrong! You can try again ${maxLoginAttempts - loginAttemptsFailed} more time(s)`
    :!passwordCorrect && maxLoginAttempts<=maxLoginAttempts
    ?'You are trying to hack us! ACCESS DENIED!'
    :'no'
    )

console.log(display)


//this is the solution given by reader

/*..note: there is loginAttemptsFailed +1
"When the code runs, loginAttemptsFailed is the attempts that have failed in the past, the + 1 is because the current attempt has just failed,"
*/
const message = (passwordCorrect
  ? 'Welcome'
  : accountLocked
  ? 'You are trying to hack us! ACCESS DENIED!'
  : `Wrong! You can try again ${maxLoginAttempts - (loginAttemptsFailed + 1)} more time(s)`
)

console.log(message)