export default function Contact() {
    return (
      <div>
        <h1>Contact Page</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Surname:
            <input type="text" name="surname" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Age:
            <input type="number" name="age" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  