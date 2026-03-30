import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { sendOfferToCRM } from './controllers/crmController';

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.post('/api/crm/lead', sendOfferToCRM);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
