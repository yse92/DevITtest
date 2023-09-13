//Wrapper function that will repeat the calculation when a `NotificationException` is thrown,
//but stop working when an `ErrorException` is thrown

function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
}

function reliableMultiply(a, b) {
    for (; ;) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof ErrorException) {
                throw error; //we stop execution if ErrorException is thrown
            } else if (error instanceof NotificationException) {
                //skip by condition
            }
        }
    }
}

console.log(reliableMultiply(8, 8));