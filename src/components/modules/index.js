import React from 'react';
import { Preshow } from './preshow/';
import { PerformanceConnector } from '../PerformanceConnector';
import { Bootcamp } from './Bootcamp/';

export function Module({ currentModule, moduleState, setPerformance, currentConn, activePerformances }) {
  const moduleHash = {
    bootcamp: <Bootcamp />,
    preshow: <Preshow moduleState={moduleState} />,
    default: (
      <PerformanceConnector
        connection={currentConn}
        activePerformances={activePerformances}
        setPerformance={(p) => setPerformance(p)}
        performance={performance}
      />
    ),
  };

  const currentModuleTitle = currentModule.module.title;
  const moduleInterface = currentModuleTitle ? moduleHash[currentModuleTitle] : moduleHash.default;

  return moduleInterface;
}
