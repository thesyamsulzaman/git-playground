// This is from master branch
const app = new App();

// This is from feature 1 branch
app.use(cors());
app.use(localStore(__dirname + "local"));

app.init();
