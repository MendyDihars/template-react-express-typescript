interface ApiConfig {
  env: string;
  port: number;
}

const config: ApiConfig = {
  env: process.env.NODE_ENV || '',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
}

export default config;
