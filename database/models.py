# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 28, 2024 19:06:40
# Database: sqlite:////tmp/tmp.YZfrwbdCqJ/elections/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Debate(SAFRSBaseX, Base):
    """
    description: Represents debates between candidates.
    """
    __tablename__ = 'debate'
    _s_collection_name = 'Debate'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    scheduled_date = Column(DateTime, nullable=False)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    DebateParticipantList : Mapped[List["DebateParticipant"]] = relationship(back_populates="debate")



class District(SAFRSBaseX, Base):
    """
    description: Represents electoral districts.
    """
    __tablename__ = 'district'
    _s_collection_name = 'District'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    region = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    VoterList : Mapped[List["Voter"]] = relationship(back_populates="district")



class Election(SAFRSBaseX, Base):
    """
    description: Represents elections held at specific times.
    """
    __tablename__ = 'election'
    _s_collection_name = 'Election'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    date_held = Column(DateTime, nullable=False)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ElectionResultList : Mapped[List["ElectionResult"]] = relationship(back_populates="election")
    VoteList : Mapped[List["Vote"]] = relationship(back_populates="election")



class Party(SAFRSBaseX, Base):
    """
    description: Represents political parties in the election.
    """
    __tablename__ = 'party'
    _s_collection_name = 'Party'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    slogan = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CandidateList : Mapped[List["Candidate"]] = relationship(back_populates="party")
    SponsorshipList : Mapped[List["Sponsorship"]] = relationship(back_populates="party")



class Candidate(SAFRSBaseX, Base):
    """
    description: Represents candidates in the looney tunes presidential election.
    """
    __tablename__ = 'candidate'
    _s_collection_name = 'Candidate'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    party_id = Column(ForeignKey('party.id'))
    speech = Column(Text)

    # parent relationships (access parent)
    party : Mapped["Party"] = relationship(back_populates=("CandidateList"))

    # child relationships (access children)
    CampaignEventList : Mapped[List["CampaignEvent"]] = relationship(back_populates="candidate")
    DebateParticipantList : Mapped[List["DebateParticipant"]] = relationship(back_populates="candidate")
    ElectionResultList : Mapped[List["ElectionResult"]] = relationship(back_populates="candidate")
    MediaAppearanceList : Mapped[List["MediaAppearance"]] = relationship(back_populates="candidate")
    SponsorshipList : Mapped[List["Sponsorship"]] = relationship(back_populates="candidate")
    VoteList : Mapped[List["Vote"]] = relationship(back_populates="candidate")



class Voter(SAFRSBaseX, Base):
    """
    description: Represents registered voters.
    """
    __tablename__ = 'voter'
    _s_collection_name = 'Voter'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    district_id = Column(ForeignKey('district.id'))

    # parent relationships (access parent)
    district : Mapped["District"] = relationship(back_populates=("VoterList"))

    # child relationships (access children)
    VoteList : Mapped[List["Vote"]] = relationship(back_populates="voter")



class CampaignEvent(SAFRSBaseX, Base):
    """
    description: Represents campaign events organized by candidates.
    """
    __tablename__ = 'campaign_event'
    _s_collection_name = 'CampaignEvent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    candidate_id = Column(ForeignKey('candidate.id'), nullable=False)
    date_held = Column(DateTime, nullable=False)
    location = Column(String, nullable=False)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("CampaignEventList"))

    # child relationships (access children)



class DebateParticipant(SAFRSBaseX, Base):
    """
    description: Represents candidates participating in a debate.
    """
    __tablename__ = 'debate_participant'
    _s_collection_name = 'DebateParticipant'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    debate_id = Column(ForeignKey('debate.id'), nullable=False)
    candidate_id = Column(ForeignKey('candidate.id'), nullable=False)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("DebateParticipantList"))
    debate : Mapped["Debate"] = relationship(back_populates=("DebateParticipantList"))

    # child relationships (access children)



class ElectionResult(SAFRSBaseX, Base):
    """
    description: Represents the result of an election for a candidate.
    """
    __tablename__ = 'election_result'
    _s_collection_name = 'ElectionResult'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    election_id = Column(ForeignKey('election.id'), nullable=False)
    candidate_id = Column(ForeignKey('candidate.id'), nullable=False)
    votes_received = Column(Integer, nullable=False)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("ElectionResultList"))
    election : Mapped["Election"] = relationship(back_populates=("ElectionResultList"))

    # child relationships (access children)



class MediaAppearance(SAFRSBaseX, Base):
    """
    description: Represents media appearances made by candidates.
    """
    __tablename__ = 'media_appearance'
    _s_collection_name = 'MediaAppearance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    candidate_id = Column(ForeignKey('candidate.id'), nullable=False)
    media_name = Column(String, nullable=False)
    appearance_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("MediaAppearanceList"))

    # child relationships (access children)



class Sponsorship(SAFRSBaseX, Base):
    """
    description: Represents sponsorship offers to candidates or parties.
    """
    __tablename__ = 'sponsorship'
    _s_collection_name = 'Sponsorship'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sponsor_name = Column(String, nullable=False)
    candidate_id = Column(ForeignKey('candidate.id'))
    party_id = Column(ForeignKey('party.id'))

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("SponsorshipList"))
    party : Mapped["Party"] = relationship(back_populates=("SponsorshipList"))

    # child relationships (access children)



class Vote(SAFRSBaseX, Base):
    """
    description: Represents individual votes cast in an election.
    """
    __tablename__ = 'vote'
    _s_collection_name = 'Vote'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    election_id = Column(ForeignKey('election.id'), nullable=False)
    candidate_id = Column(ForeignKey('candidate.id'), nullable=False)
    voter_id = Column(ForeignKey('voter.id'), nullable=False)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("VoteList"))
    election : Mapped["Election"] = relationship(back_populates=("VoteList"))
    voter : Mapped["Voter"] = relationship(back_populates=("VoteList"))

    # child relationships (access children)
