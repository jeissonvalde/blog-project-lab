import { Component } from 'react'

export interface Route {
  path: string,
  Container: Component,
  label: string,
}