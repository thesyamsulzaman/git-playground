// This is from master branch
const app = new App();

app.init(WebSocket);
// This is from feature 1 branch
app.use(cors());

app.init();
