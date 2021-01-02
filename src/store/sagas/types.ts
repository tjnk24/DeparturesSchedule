import { AllEffect, ForkEffect } from 'redux-saga/effects';

export type RootSagaReturnType = Generator<
  AllEffect<
    Generator<ForkEffect<never>, void, unknown>
  >, void, unknown
>
