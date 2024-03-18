function skillsMember(){
    return{
        name: "John",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        showSkills: function(){
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
}