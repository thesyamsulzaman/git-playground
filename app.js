// This is from master branch
const app = new App();
const https = new Https();

// This is from feature 1 branch
app.use(cors());
app.use(localStore(__dirname + "local"));
app.use(cloudService(new Docker()));


app.use(Docker());

app.init(https);
