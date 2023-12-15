"use strict";
(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    //TO DO//
    //1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const threeLanguages = users.filter(user => user.languages.length >= 3);
    console.log('Users with at least 3 languages:', threeLanguages);

    //2. Use .map to create an array of strings where each element is a user's email address
    const emails = users.map(user => user.email);
    console.log('User emails:', emails);

    //3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
    console.log('Total years of experience:', totalYearsOfExperience);

    //4. Use .reduce to get the longest email from the list of users.
    const longestEmail = users.reduce((longest, user) => {
        if (user.email.length > longest.length) {
            return user.email;
        } else {
            return longest;
        }
    }, '');
    console.log('Longest email:', longestEmail);

    //5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. //needed help with this one//
    // const userListString = users.reduce((str, user) => {
    //     return str + user.name + ',';
    // }, 'Your instructors are: ');
    //
    // console.log(userListString);
    const instructorList = users.reduce((str, user, index, array) => {
        const separator = index === array.length - 1 ? '.' : ', ';
        return str + user.name + separator;
    }, 'Your instructors are: ');

    console.log(instructorList);

    // Bonus: Use .reduce to get the unique list of languages from the list of users
    const uniqueLanguages = users.reduce((languages, user) => {
        user.languages.forEach(language => {
            if (!languages.includes(language)) {
                languages.push(language);
            }
        });
        return languages;
    }, []);

    console.log('Unique languages:', uniqueLanguages);

})();