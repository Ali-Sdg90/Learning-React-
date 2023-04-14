const allMembers = [];

class OnlyNameAndLastName {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

class AddMember extends OnlyNameAndLastName {
    constructor(name, lastName, age) {
        super(name, lastName);
        this.age = age;
    }

    showInfo() {
        console.log(this);
    }
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const member = new AddMember(
        document.getElementById("name").value,
        document.getElementById("last-name").value,
        document.getElementById("age").value
    );

    allMembers.push(member);
});

document.getElementById("show-members").addEventListener("click", function () {
    console.log(allMembers);
});
