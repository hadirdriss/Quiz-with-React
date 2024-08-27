import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";
import Categories from "../../Data/Categories";
const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");

  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name || !language || !country) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

 

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30,color:"green" }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the required fields correctly</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25}}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem value="very_easy">Very Easy</MenuItem>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
            <MenuItem value="very_hard">Very Hard</MenuItem>
          </TextField>
          
         
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Language"
            variant="outlined"
            onChange={(e) => setLanguage(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Country (Optional)"
            variant="outlined"
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.png" className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;
