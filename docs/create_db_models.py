# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Candidate(Base):
    """
    description: Represents candidates in the looney tunes presidential election.
    """
    __tablename__ = 'candidate'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    party_id = Column(Integer, ForeignKey('party.id'), nullable=True)
    speech = Column(Text, nullable=True)

class Party(Base):
    """
    description: Represents political parties in the election.
    """
    __tablename__ = 'party'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    slogan = Column(String, nullable=True)

class Election(Base):
    """
    description: Represents elections held at specific times.
    """
    __tablename__ = 'election'
    id = Column(Integer, primary_key=True)
    date_held = Column(DateTime, nullable=False, default=datetime.datetime.now)
    location = Column(String, nullable=False)

class Vote(Base):
    """
    description: Represents individual votes cast in an election.
    """
    __tablename__ = 'vote'
    id = Column(Integer, primary_key=True)
    election_id = Column(Integer, ForeignKey('election.id'), nullable=False)
    candidate_id = Column(Integer, ForeignKey('candidate.id'), nullable=False)
    voter_id = Column(Integer, ForeignKey('voter.id'), nullable=False)

class Voter(Base):
    """
    description: Represents registered voters.
    """
    __tablename__ = 'voter'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    district_id = Column(Integer, ForeignKey('district.id'), nullable=True)

class District(Base):
    """
    description: Represents electoral districts.
    """
    __tablename__ = 'district'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    region = Column(String, nullable=True)

class Debate(Base):
    """
    description: Represents debates between candidates.
    """
    __tablename__ = 'debate'
    id = Column(Integer, primary_key=True)
    scheduled_date = Column(DateTime, nullable=False, default=datetime.datetime.now)
    location = Column(String, nullable=False)

class DebateParticipant(Base):
    """
    description: Represents candidates participating in a debate.
    """
    __tablename__ = 'debate_participant'
    id = Column(Integer, primary_key=True)
    debate_id = Column(Integer, ForeignKey('debate.id'), nullable=False)
    candidate_id = Column(Integer, ForeignKey('candidate.id'), nullable=False)

class CampaignEvent(Base):
    """
    description: Represents campaign events organized by candidates.
    """
    __tablename__ = 'campaign_event'
    id = Column(Integer, primary_key=True)
    candidate_id = Column(Integer, ForeignKey('candidate.id'), nullable=False)
    date_held = Column(DateTime, nullable=False, default=datetime.datetime.now)
    location = Column(String, nullable=False)

class Sponsorship(Base):
    """
    description: Represents sponsorship offers to candidates or parties.
    """
    __tablename__ = 'sponsorship'
    id = Column(Integer, primary_key=True)
    sponsor_name = Column(String, nullable=False)
    candidate_id = Column(Integer, ForeignKey('candidate.id'), nullable=True)
    party_id = Column(Integer, ForeignKey('party.id'), nullable=True)

class ElectionResult(Base):
    """
    description: Represents the result of an election for a candidate.
    """
    __tablename__ = 'election_result'
    id = Column(Integer, primary_key=True)
    election_id = Column(Integer, ForeignKey('election.id'), nullable=False)
    candidate_id = Column(Integer, ForeignKey('candidate.id'), nullable=False)
    votes_received = Column(Integer, nullable=False, default=0)

class MediaAppearance(Base):
    """
    description: Represents media appearances made by candidates.
    """
    __tablename__ = 'media_appearance'
    id = Column(Integer, primary_key=True)
    candidate_id = Column(Integer, ForeignKey('candidate.id'), nullable=False)
    media_name = Column(String, nullable=False)
    appearance_date = Column(DateTime, nullable=False, default=datetime.datetime.now)

# Create SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
party1 = Party(name="Toon Party", slogan="Fun for All")
party2 = Party(name="Acme Alliance", slogan="Innovation and Progress")

candidate1 = Candidate(name="Bugs Bunny", party_id=1, speech="What's up, doc? Vote for fun!")
candidate2 = Candidate(name="Daffy Duck", party_id=2, speech="You're despicable if not voting for me!")
candidate3 = Candidate(name="Tweety", party_id=None, speech="I tawt I taw a vote!")

election1 = Election(date_held=datetime.datetime(2024, 11, 5), location="Looneyville")
election2 = Election(date_held=datetime.datetime(2023, 5, 15), location="Toontown")

district1 = District(name="Looney District", region="Cartoon County")
district2 = District(name="Acme Ward", region="Comedy Country")

voter1 = Voter(name="Elmer Fudd", district_id=1)
voter2 = Voter(name="Porky Pig", district_id=2)
voter3 = Voter(name="Yosemite Sam", district_id=1)

vote1 = Vote(election_id=1, candidate_id=1, voter_id=1)
vote2 = Vote(election_id=1, candidate_id=2, voter_id=2)
vote3 = Vote(election_id=2, candidate_id=3, voter_id=3)

debate1 = Debate(scheduled_date=datetime.datetime(2024, 10, 20), location="Toontopia")
debate2 = Debate(scheduled_date=datetime.datetime(2023, 4, 10), location="Acme Arena")

debate_participant1 = DebateParticipant(debate_id=1, candidate_id=1)
debate_participant2 = DebateParticipant(debate_id=1, candidate_id=2)
debate_participant3 = DebateParticipant(debate_id=2, candidate_id=3)

campaign_event1 = CampaignEvent(candidate_id=1, date_held=datetime.datetime(2024, 6, 15), location="Toon Stadium")
campaign_event2 = CampaignEvent(candidate_id=2, date_held=datetime.datetime(2023, 6, 5), location="Duck Pond")
campaign_event3 = CampaignEvent(candidate_id=3, date_held=datetime.datetime(2024, 8, 20), location="Birdhouse Plaza")

sponsorship1 = Sponsorship(sponsor_name="Acme Corp", candidate_id=2)
sponsorship2 = Sponsorship(sponsor_name="Toon Enterprises", party_id=1)

election_result1 = ElectionResult(election_id=1, candidate_id=1, votes_received=250)
election_result2 = ElectionResult(election_id=1, candidate_id=2, votes_received=150)
election_result3 = ElectionResult(election_id=2, candidate_id=3, votes_received=95)

media_appearance1 = MediaAppearance(candidate_id=1, media_name="Toon TV", appearance_date=datetime.datetime(2024, 3, 27))
media_appearance2 = MediaAppearance(candidate_id=2, media_name="Duck Radio", appearance_date=datetime.datetime(2023, 7, 14))
media_appearance3 = MediaAppearance(candidate_id=3, media_name="Bird Times", appearance_date=datetime.datetime(2024, 2, 18))

# Add instances to the session
session.add_all([
    party1, party2,
    candidate1, candidate2, candidate3,
    election1, election2,
    district1, district2,
    voter1, voter2, voter3,
    vote1, vote2, vote3,
    debate1, debate2,
    debate_participant1, debate_participant2, debate_participant3,
    campaign_event1, campaign_event2, campaign_event3,
    sponsorship1, sponsorship2,
    election_result1, election_result2, election_result3,
    media_appearance1, media_appearance2, media_appearance3
])

# Commit the session
session.commit()
session.close()
