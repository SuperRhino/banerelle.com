import React from 'react';
import Actions from '../../Utils/Actions';
import ApiRequest from '../../Api/ApiRequest';
import $ from 'jquery';

export default class GuestDetail extends React.Component {
  static propTypes = {
    guest: React.PropTypes.object,
    onChange: React.PropTypes.func,
  };
  static defaultProps = {
    guest: {},
    onChange: () => {},
  };

  constructor(props) {
    super(props);

    this.customPartyLeader = !! this.props.guest.id;

    this.state = {
      guest: this.props.guest,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.customPartyLeader = (nextProps.guest.id && nextProps.guest.party_leader_name);
    this.setState({guest: nextProps.guest});
  }

  show() {
    $('#guestDetail').modal('show');
  }

  hide() {
    $('#guestDetail').modal('hide');
  }

  renderPlusOneField() {
    if (this.state.guest.id) {
      return null;
    }

    return (
      <div className="form-group">
        <div className="checkbox col-xs-9 col-xs-offset-3">
          <label>
            <input
              type="checkbox"
              name="plusOne"
              value="true"
              selected={!! this.state.guest.plusOne}
              onChange={e => this._setGuestState({plusOne: e.target.checked})}
            /> Add +1 For Guest
          </label>
        </div>
      </div>
    );
  }

  renderModalBody() {
    return (
      <div className="modal-body">
        <div className="form-group">
          <label className="col-xs-3 control-label">First Name</label>
          <div className="col-xs-9">
            <input
              ref="first_name"
              type="text"
              placeholder="Kitty"
              className="form-control"
              value={this.state.guest.first_name || ''}
              onChange={e => this._setGuestState({first_name: e.target.value})}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">Last Name</label>
          <div className="col-xs-9">
            <input
              ref="last_name"
              type="text"
              placeholder="Goblin"
              className="form-control"
              value={this.state.guest.last_name || ''}
              onChange={e => this._setGuestState({last_name: e.target.value})}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">Party Leader</label>
          <div className="col-xs-9">
            <input
              ref="party_leader_name"
              type="text"
              placeholder="Kitty Goblin"
              className="form-control"
              value={this.state.guest.party_leader_name || ''}
              onChange={e => this._setPartyLeader(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">Address</label>
          <div className="col-xs-9">
            <div className="row">
                <div className="col-xs-12">
                    <input
                      ref="address_street"
                      type="text"
                      placeholder="1440 Lincoln Ave"
                      className="form-control"
                      value={this.state.guest.address_street || ''}
                      onChange={e => this._setGuestState({address_street: e.target.value})}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <input
                      ref="address_city"
                      type="text"
                      placeholder="Lakewood"
                      className="form-control"
                      style={styles.inlineFormControl}
                      value={this.state.guest.address_city || ''}
                      onChange={e => this._setGuestState({address_city: e.target.value})}
                    />
                </div>
                <div className="col-xs-6 col-sm-3">
                    <input
                      ref="address_state"
                      type="text"
                      placeholder="OH"
                      className="form-control"
                      style={styles.inlineFormControl}
                      value={this.state.guest.address_state || ''}
                      onChange={e => this._setGuestState({address_state: e.target.value})}
                    />
                </div>
                <div className="col-xs-6 col-sm-3">
                    <input
                      ref="address_zip"
                      type="text"
                      placeholder="44107"
                      className="form-control"
                      style={styles.inlineFormControl}
                      value={this.state.guest.address_zip || ''}
                      onChange={e => this._setGuestState({address_zip: e.target.value})}
                    />
                </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">Phone</label>
          <div className="col-xs-9">
            <input
              ref="phone"
              type="text"
              placeholder="415-555-5555"
              className="form-control"
              value={this.state.guest.phone || ''}
              onChange={e => this._setGuestState({phone: e.target.value})}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">Email</label>
          <div className="col-xs-9">
            <input
              ref="email"
              type="text"
              placeholder="kittygoblin@gmail.com"
              className="form-control"
              value={this.state.guest.email || ''}
              onChange={e => this._setGuestState({email: e.target.value})}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">RSVP</label>
          <div className="col-xs-9">
            <label className="radio-inline">
              <input
                type="radio"
                name="rsvp"
                value="Yes"
                checked={this.state.guest.rsvp==='Yes'}
                onChange={e => this._setGuestState({rsvp: e.target.value})}
              /> Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="rsvp"
                value="No"
                checked={this.state.guest.rsvp==='No'}
                onChange={e => this._setGuestState({rsvp: e.target.value})}
              /> No
            </label>
          </div>
        </div>
        {this.renderPlusOneField()}
      </div>
    );
  }

  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="guestDetail">
        <div className="modal-dialog">
          <div className="modal-content">
            <form className="form-horizontal" role="form" onSubmit={this.onSubmit}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">
                  {this.state.guest.id ? 'Editing: ' : 'Adding: '}
                  {! this.state.guest.first_name && ! this.state.guest.last_name ?
                    'New Guest' :
                    (this.state.guest.first_name||'') + ' ' + (this.state.guest.last_name||'')}
                </h4>
              </div>
              {this.renderModalBody()}
              <div className="modal-footer">
                <button type="submit" className="btn btn-lg btn-primary">
                  {this.state.guest.id ? 'Save changes' : 'Add Guest'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  _setGuestState(newGuest) {
    let oldGuest = this.state.guest,
        guest = Object.assign(oldGuest, newGuest);

    if (! this.customPartyLeader) {
      let party = (guest.first_name||'') + ' ' + (guest.last_name||'');
      guest.party_leader_name = party;
    }

    this.setState({guest});
  }

  _setPartyLeader(party_leader_name) {
    this.customPartyLeader = true;
    this._setGuestState({party_leader_name});
  }

  onSubmit(e) {
    e.preventDefault();
    let guest = this.state.guest,
        endpoint = guest.id ? '/guests/'+guest.id : '/guests';

    ApiRequest.post(endpoint)
      .data(guest)
      .send(res => {
        this.hide();
        this.props.onChange(res.data);
      });
  }
}

var styles = {
    inlineFormControl: {
        marginTop: 15,
    },
};
