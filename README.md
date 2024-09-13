# Spin JS SDK Perftest

This is a repository with JS apps built with the [`spin-js-sdk`](github.com/fermyon/spin-js-sdk).

The description of different apps:
- `simple-test`: It is an app that just responds with "hello universe".


## Building and running

- Move into the app and install dependencies
```bash
cd <app_name>
npm install
```

- Build the app
```bash
spin build
```

- Start the app
```bash
spin up
```

- Run the `test.sh` in the particular app.
```bash
./test.sh
```

## Results

- The device used to benchmark this is a Macbook M2 Max.
- All the results in the table below are for testing the app for `10_000` requests with 8 concurrant connections.

| app         | avg    | stdev    | max     | 50%    | 75%    | 90%    | 95%    | 99 %   |
| ----------- | ------ | -------- | ------- | ------ | ------ | ------ | ------ | ------ |
| simple-test | 1.95ms | 391.32us | 14.29ms | 1.86ma | 2.04ma | 2.30ms | 2.61ms | 3.09ms |