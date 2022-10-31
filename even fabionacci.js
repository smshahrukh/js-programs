function evenFab(limit) {
    
    if(limit < 2) {
        return 0;
    }
    
    let a = 0, b=2;
    let total = a+b;
    
    while (b <= limit) {
        let c = 4 * b + a;
       
            // If we go beyond limit, we break loop
            if (c > limit)
                break;
       
            // Move to next even number and update sum
            a=b;
            b=c
            total += b;
    }
    
    return total;
}
    

console.log(evenFab(4000000))