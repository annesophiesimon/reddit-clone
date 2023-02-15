import { convertTime } from '../index';

describe('convertTime function', () => {
  it('render the past minute', () => {
    const time = convertTime(Math.floor(Date.now() / 1000));
    expect(time).toEqual('0 minute ago');
  });

  it('render the past minutes', () => {
    // set time now minus 30 minutes
    let date = new Date(Date.now());
    date.setMinutes(date.getMinutes() - 30);
    const time = convertTime(Math.floor(date / 1000));
    expect(time).toEqual('30 minutes ago');
  });

  it('render the past hour', () => {
    // set time now minus 1 hour
    let date = new Date(Date.now());
    date.setHours(date.getHours() - 1);
    const time = convertTime(Math.floor(date / 1000));
    expect(time).toEqual('1 hour ago');
  });

  it('render the past hours', () => {
    // set time now minus 2 hour
    let date = new Date(Date.now());
    date.setHours(date.getHours() - 2);
    const time = convertTime(Math.floor(date / 1000));
    expect(time).toEqual('2 hours ago');
  });

  it('render the past day', () => {
    // set time now minus 25 hours
    let date = new Date();
    date.setHours(date.getHours() - 25);
    const time = convertTime(Math.floor(date / 1000));
    expect(time).toEqual('1 day ago');
  });

  it('render the past days', () => {
    // set time now minus 49 hours
    let date = new Date();
    date.setHours(date.getHours() - 49);
    const time = convertTime(Math.floor(date / 1000));
    expect(time).toEqual('2 days ago');
  });
});
